import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes, NodeApiError, NodeOperationError } from 'n8n-workflow';
import { description, execute } from './actions/pdfToImage';

export class PdfToImage implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'PDF to Image',
		name: 'pdfToImage',
		icon: { light: 'file:../../icons/light.svg', dark: 'file:../../icons/dark.svg' },
		group: ['transform'],
		version: 1,
		description: 'Render PDF pages as PNG, JPG, or WebP images using PDF API Hub',
		subtitle: '={{$parameter["operation"]}}',
		defaults: { name: 'PDF to Image' },
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'pdfapihubApi', required: true }],
		usableAsTool: true,
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
				{
					name: 'PDF to PNG',
					value: 'pdfToPng',
					description: 'Convert PDF pages to PNG images',
					action: 'Convert PDF to PNG',
				},
				{
					name: 'PDF to JPG',
					value: 'pdfToJpg',
					description: 'Convert PDF pages to JPEG images',
					action: 'Convert PDF to JPG',
				},
				{
					name: 'PDF to WebP',
					value: 'pdfToWebp',
					description: 'Convert PDF pages to WebP images',
					action: 'Convert PDF to WebP',
				},
			],
				default: 'pdfToPng',
			},
			...description,
		],
	};


	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		for (let i = 0; i < items.length; i++) {
			try {
				const operation = this.getNodeParameter('operation', i) as string;
				await execute.call(this, i, returnData, operation);
			} catch (error) {
				if (this.continueOnFail()) {
					const message = error instanceof Error ? error.message : 'Unknown error';
					returnData.push({ json: { error: message }, pairedItem: { item: i } });
				} else if (error instanceof NodeApiError) {
					throw error;
				} else {
					throw new NodeOperationError(this.getNode(), error, { itemIndex: i });
				}
			}
		}
		return [returnData];
	}
}

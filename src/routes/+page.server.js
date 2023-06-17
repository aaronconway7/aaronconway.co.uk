import { NOTION_TOKEN, NOTION_PROJECTS } from '$env/static/private';
import { Client } from '@notionhq/client';

// Initializing a client
const notion = new Client({
	auth: NOTION_TOKEN
});

export async function load() {
	const response = await notion.databases.query({ database_id: NOTION_PROJECTS });
	return response;
}

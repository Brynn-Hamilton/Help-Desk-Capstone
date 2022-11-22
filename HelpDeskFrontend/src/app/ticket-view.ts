export interface TicketView {
    id: number,
    requester_id: number;
    requester_name: string;
    requester_email: string;
    assignee_id: number;
    assignee_name: string;
    assignee_email: string;
    title: string;
    status: string;
    details: string;
    resolvedby_id: number;
    resolvedby_name: string;
    resolution: string;
}

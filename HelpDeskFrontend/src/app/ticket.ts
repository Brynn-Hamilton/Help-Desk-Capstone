export interface Ticket {
    ticket_id: number;
    requester_id: number;
    assignee_id: number;
    subject_title: string;
    ticket_status: string;
    ticket_details: string;
    resolvedby_id: number | null;
    ticket_resolution: string;
}

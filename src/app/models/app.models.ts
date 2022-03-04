export interface Customers{
    id: number;
    name: string;
    address: string;
    city: string;
    country: string;
    zipcode: string;
    phone_no: string;
    email_id: string;
};

export interface Orders{
    id: number;
    invoice_no: number;
    invoice_date: string;
    status: string;
    customer_id: number;
    invoice_amount: number;
};
export interface ISendMailData {
    subject: string;
    body: string;
}

export interface IMailAdapter {
    sendmail: (data: ISendMailData) => void;
}
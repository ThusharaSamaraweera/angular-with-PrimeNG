export interface Sender {
  id: number;
  senderName: string;
  messages: [
    {
      id: number;
      content: string;
      time: string;
    }
  ];
}

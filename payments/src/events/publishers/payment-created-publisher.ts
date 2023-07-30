import { Publisher, Subjects, PaymentCreatedEvent } from '@czprojects/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}

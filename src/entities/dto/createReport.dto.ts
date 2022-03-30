export class CreateReportDTO {
  constructor(
    public readonly ipAddress: string,
    public readonly phoneNumber: string,
    public readonly name: string
  ) {}
}

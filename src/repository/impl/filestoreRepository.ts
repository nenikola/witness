import IReport from '../../entities/report.interface';
import IRepository from '../repository.interface';
import * as fs from 'fs';

export default class FilestoreRepository implements IRepository<IReport> {
  private readonly filestoreDirPath = __dirname + '/../filestore/';
  private readonly fileName = 'reports.csv';

  constructor() {
    if (!fs.existsSync(this.filestoreDirPath)) {
      fs.mkdirSync(this.filestoreDirPath);
    }
    if (!fs.existsSync(this.filestoreDirPath + this.fileName)) {
      fs.writeFileSync(
        this.filestoreDirPath + this.fileName,
        `report_name,phone_number,country\n`
      );
    }
  }
  async save(item: IReport): Promise<void> {
    await fs.promises.appendFile(
      this.filestoreDirPath + this.fileName,
      `${item.getName()},'${item.getPhoneNumber()}',${item.getCountry()}\n`
    );
    return;
  }
}

export class Pagination {
  items: any[];
  count: number;
  page: number;

  constructor(items: any[], count: number, page: number) {
    this.items = items;
    this.count = count;
    this.page = page;
  }

  getPages(): number {
    return this.count / this.getPageSize();
  }

  getPreviousPages(): number[] {
    let result = [];
    let p = this.page;
    [3, 2, 1].forEach(function (i) {
      let pp = p - i;
      if (pp > 0) {
        result.push(pp);
      }
    });
    return result;
  }

  getNextPages(): number[] {
    let result = [];
    let p = this.page;
    [1, 2, 3].forEach(function (i) {
      result.push(p + i);
    });
    return result;
  }

  getCurrentPage(): number {
    return this.page;
  }

  getPageSize(): number {
    return 30;
  }
}

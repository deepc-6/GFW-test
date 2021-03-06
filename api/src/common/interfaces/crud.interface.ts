/** The interface for the CRUD operations */
export interface CRUD {
  list: (limit: number, page: number) => Promise<any>;
  create: (resource: any) => Promise<any>;
  readById: (id: string) => Promise<any>;
}

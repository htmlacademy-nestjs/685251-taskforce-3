export interface CRUDRepository<E, I, R> {
    findById(id: I): Promise<R |  null>;
    create(item: E): Promise<R>;
    update(id: I, item: E): Promise<R>;
    destroy(id: I): Promise<void>;
}

// E - entity type, I - id type, R - response type
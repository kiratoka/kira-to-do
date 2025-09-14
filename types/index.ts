export interface Todo {
    id: string;
    title: string;
    description: string;
    completedAt?: Date | null;
    createdAt: Date;
    updatedAt: Date;
}


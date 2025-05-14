export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';

export type Subjects =
  | 'User'
  | 'Order'
  | 'Pizza'
  | 'Topping'
  | 'Restaurant'
  | 'all'; // allow global permissions like manage all

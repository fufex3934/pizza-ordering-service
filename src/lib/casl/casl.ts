import { AbilityBuilder, Ability } from '@casl/ability';
import { User } from '../../generated/prisma';

export function defineAbilitiesFor(user: User): Ability {
  const { can, rules } = new AbilityBuilder(Ability);

  if (user.role === 'ADMIN') {
    can('manage', 'all'); // Admin can manage everything
  }

  if (user.role === 'RESTAURANT_MANAGER') {
    can('read', 'order'); // Restaurant Manager can read orders
    can('update', 'order'); // Restaurant Manager can update orders (status)
    can('manage', 'pizza'); // Restaurant Manager can manage pizzas
    can('manage', 'topping'); // Restaurant Manager can manage toppings
  }

  if (user.role === 'CUSTOMER') {
    can('read', 'pizza'); // Customers can read pizzas
    can('create', 'order'); // Customers can create orders
    can('read', 'order', { userId: user.id }); // Customers can only view their own orders
  }

  return new Ability(rules);
}
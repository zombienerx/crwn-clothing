import { createSelector } from 'reselect';
import cartDropdownComponent from '../../components/cart-dropdown/cart-dropdown.component';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
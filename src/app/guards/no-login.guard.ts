import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noLoginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

    return false;
};

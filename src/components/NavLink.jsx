import { NavLink as RouterNavLink } from "react-router-dom";
import { forwardRef } from "react";

const NavLink = forwardRef(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) => {
          let combinedClassName = className || '';
          if (isActive && activeClassName) {
            combinedClassName += ` ${activeClassName}`;
          }
          if (isPending && pendingClassName) {
            combinedClassName += ` ${pendingClassName}`;
          }
          return combinedClassName.trim();
        }}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
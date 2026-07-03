import { inputCheckboxWrapperVariants } from "./variants/input-checkox-wrapper-variants"
import { inputCheckboxVariants } from "./variants/input-checkbox-variants";
import { inputCheckboxIconVariants } from "./variants/input-checkbox-icon-variants";
import { type VariantProps } from "class-variance-authority";

import CheckIcon from "../assets/icons/check.svg?react";
import Icon from "./icon";
import Skeleton from "./skeleton";

interface InputCheckboxProps
  extends VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
        loading?: boolean;
    }

export default function InputCheckbox({
  size,
  disabled,
  className,
  loading,
  ...props
}: InputCheckboxProps) {
    if (loading) {
        return (
            <Skeleton
                rounded="sm"
                className={inputCheckboxVariants({ variant: "none", size })}
            />
        );
    }

    return (
        <label className={inputCheckboxWrapperVariants({ className })}>
        <input
            type="checkbox"
            className={inputCheckboxVariants({ size, disabled })}
            {...props}
        />
        <Icon className={inputCheckboxIconVariants({ size })} svg={CheckIcon} />
    </label>
    )
}
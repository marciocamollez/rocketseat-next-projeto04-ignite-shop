import { styled } from "../../styles";

export const CartButtonContainer = styled("button", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: 6,
    position: "relative",
    width: "3rem",
    height: "3rem",
    background: "$gray800",
    color: "$gray500",

    "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
    },

    svg: {
        fontSize: 24,
    },

    variants: {
        color: {
            grey: {
                background: "$gray800",
                color: "$gray500",
            },
            green: {
                background: "$green500",
                color: "$white",
            }
        }
    },

    defaultVariants: {
        color: "gray",
    }
})
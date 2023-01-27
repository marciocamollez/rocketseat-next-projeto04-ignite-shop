import { styled } from "@/styles";
import * as Dialog from "@radix-ui/react-dialog";

export const CartContent = styled(Dialog.Content, {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    width: "30rem",
    background: "$gray800",
    padding: "3rem",
    paddingTop: "4.5rem",
    boxShadow: "-4px 0px 30px rgba(0,0,0,0.8)",
    display: "flex",
    flexDirection: "column",

    h2: {
        fontWeight: 700,
        fontSize: "$lg",
        color: "$gray100",
        marginBottom: "2rem",
    },

    '> section': {
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        flex: 1,
        overflowY: "auto",
    }
})

export const CartClose = styled(Dialog.Close, {
    background: "none",
    border: "none",
    color: "$gray500",
    position: "absolute",
    top: "1.75rem",
    right: "1.75rem",
})

export const CartProduct = styled("div", {
    width: "100%",
    display: "flex",
    gap: "1.25rem",
    alignItems: "center",
    height: "5.8rem",
})

export const CartProductImage = styled("div", {
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    height: "5.8rem",
    display: "flex",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "6.3rem",

    img:{
        objectFit: "cover",
    }
})

export const CartProductDetails = styled("div", {
    display: "flex",
    flexDirection: "column",
    height: "100%",

    p: {
        color: "$gray300",
        fontSize: "$md",
    },
    strong: {
        marginTop: 4,
        fontSize: "$md",
        fontWeight: 700,
    },
    button: {
        marginTop: "auto",
        width: "max-content",
        background: "none",
        color: "$gray500",
        fontSize: "1rem",
        fontWeight: 700,
        border: "none",
    },
})


export const CartFinalization = styled("div", {
    display: "flex",
    flexDirection: "column",
    marginTop: "auto",

    button: {
        marginTop: "auto",
        width: "100%",
        height: "4rem",
        background: "$green500",
        color: "$white",
        fontSize: "$md",
        fontWeight: 700,
        border: "none",
        borderRadius: 8,

        "&:disabled": {
            opacity: 0.6,
            cursor: "not-allowed",
        },

        "&:not(:disabled):hover": {
            background: "$green300",
        },
    },
})

export const FinalizationDetails = styled("section", {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: 55,

    div: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",

        p: {
            fontSize: "$md",
            color: "$gray300",
        },

        "&:last-child": {
            fontWeight: "bold",

            span: {
                fontSize: "$md",
            },

            p: {
                color: "$gray100",
                fontSize: "$xl",
            }
        },
    },
})
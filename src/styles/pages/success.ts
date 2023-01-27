import { styled } from "..";

export const SuccessContainer = styled("main", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    height: 656,

    h1: {
        fontSize: "2xl",
        color: "$gray100",
        marginBottom: "2rem",
    },

    p: {
        fontSize: "xl",
        color: "$gray300",
        maxWidth: 560,
        textAlign: "center",
        marginTop: "2rem",
    },

    a: {
        marginTop: "5rem",
        marginBottom: "5rem",
        display: "block",
        fontSize: "lg",
        color: "$green500",
        textDecoration: "none",
        fontWeight: "bold",

        "&:hover" : {
            color: "$green300",
        }
    }
})


export const ImagesContainer = styled("section", {
    display: "flex",
    alignItems: "center",
    marginBottom: "3rem",
})

export const ImageContainer = styled("div", {
    width: 140,
    height: 140,
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: "50%",
    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    position: "relative",

    img: {
        objectFit: "cover"
    }
})
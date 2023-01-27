import { stripe } from "@/lib/stripe";
import { ImageContainer } from "@/styles/pages/product";
import { ImagesContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  productsImages: string[];
}

export default function Success({
  customerName,
  productsImages,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Ignite Shop - Compra Efetuada</title>
      </Head>
      <SuccessContainer>
        <ImagesContainer>
          {productsImages.map((image, i) => (
            <ImageContainer key={i}>
              <Image src={image} alt="" width={220} height={210} />
            </ImageContainer>
          ))}
        </ImagesContainer>
        <h1>Compra efetuada</h1>
        <p>
          Uhuu! <strong>{customerName}</strong>, sua compra de{" "}
          <strong>{productsImages.length}</strong> camisetas já estao a caminho
          da sua casa
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.sessionId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const productsImages = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product;
    return product.images[0];
  });

  return {
    props: {
      customerName,
      productsImages,
    },
  };
};

import { Html, Head, Body, Container, Text, Link } from '@react-email/components';

interface WelcomeEmailProps {
  email: string;
}

export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({ email }) => (
  <Html>
    <Head />
    <Body style={{ fontFamily: 'sans-serif' }}>
      <Container>
        <Text>Hello {email},</Text>
        <Text>Thank you for subscribing to the Rolitt newsletter!</Text>
        <Text>We'll send you regular updates on our latest products, special offers, and interesting content.</Text>
        <Text>
          If you have any questions, feel free to <Link href="mailto:support@rolitt.com">contact us</Link>.
        </Text>
        <Text>Have a great day!</Text>
        <Text>The Rolitt Team</Text>
      </Container>
    </Body>
  </Html>
);
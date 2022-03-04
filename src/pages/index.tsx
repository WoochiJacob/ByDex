import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import axios from 'axios';

function Home({ userAdress }: any) {
    return (
        <Container>
            <Section>
                <Animation
                    animate={{ x: [-100, 0] }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                >
                    {userAdress}
                </Animation>

                <motion.circle
                    cx={500}
                    animate={{ cx: [null, 100, 200] }}
                    transition={{ duration: 3, times: [0, 0.2, 1] }}
                >
                    {/* {`${userInfo}`} */}
                </motion.circle>
            </Section>
        </Container>
    );
}

export async function getServerSideProps() {
    const { data } = await axios.get('https://geolocation-db.com/json/');
    const userAdress = data.IPv4;

    return {
        props: {
            userAdress,
        },
    };
}

const Container = styled.section`
    width: 1280px;
    margin: 0 auto;
`;

const Section = styled.section`
    margin-top: 60px;
`;

const Animation = styled(motion.div)`
    font-size: 14px;
`;

export default Home;

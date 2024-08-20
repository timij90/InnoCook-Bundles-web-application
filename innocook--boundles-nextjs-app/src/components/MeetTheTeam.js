// components/MeetTheTeam.js
import { Container, Row} from 'react-bootstrap';
import TeamMember from './TeamMember';

const teamMembers = [
    {
        image: 'https://img.freepik.com/premium-vector/african-man-purple-shirt-vector-illustration_614983-4154.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713225600&semt=ais',
        name: 'Timi Jacobs',
        title: 'CPA Student',
        description: 'I am a proactive and self-motivated individual who is skilled in web development, feel free to reach me!',
        social: [
            { platform: 'linkedin', url: 'www.linkedin.com/in/timi-jacobs-b61882241' },
            { platform: 'github', url: 'https://github.com' }
        ],
    },
    {
        image: 'https://img.freepik.com/free-vector/smiling-woman-with-wavy-hair_1308-171736.jpg?t=st=1722913885~exp=1722917485~hmac=f29844a7e32556a81ca556ffee57c66ed859fb80fe6a33fc64d266968a523faa&w=1060',
        name: 'Connie Hsu',
        title: 'CPA Student',
        description: 'I am a eager learner who is passionate about software development, and always look for innovative solutions to solve real-world problems.',
        social: [
            { platform: 'linkedin', url: 'https://www.linkedin.com/in/connie-hsu-yungting' },
            { platform: 'github', url: 'https://github.com/coniiiettn' }
        ],
    },
];

const MeetTheTeam = () => {
    return (
        <section className="text-white py-5">
            <Container>
                <h2 className="text-center mb-4">Meet Our Team</h2>
                <p className="text-center mb-4">
                </p>
                <Row>
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default MeetTheTeam;

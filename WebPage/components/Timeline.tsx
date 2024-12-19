import Timeline from 'react-native-timeline-flatlist';

const data = [
  {time: '09/2022', title: 'Ideation and Problem Identification', icon: require('../constants/imgs/Check-mark.png'), description: 'Identified the need for a social eCommerce platform and conducted initial market research to validate the idea.'},
  {time: '08/2023', title: 'Business Case Development', icon: require('../constants/imgs/Check-mark.png'), description: 'Created a business case and pitch deck.'},
  {time: '09/2024', title: 'Prototype Development', icon: require('../constants/imgs/Check-mark.png'), description: 'Designed a high-fidelity prototype using Figma.'},
  {time: '10/2024', title: 'Funding and Resource Acquisition', icon: require('../constants/imgs/Check-mark.png'), description: 'Recruited key team members and pitched to stakeholders, securing funding for the prototyping phases.'},
  {time: '02/2025', title: 'Alpha Prototype', description: 'Created the development enviorment and the basic e-commerce version of the application using Python and React Native.'},
  {time: '02/2025', title: 'Alpha Testing and Feedback'},
  {time: '03/2025', title: 'Beta Prototype', description: 'Implement \'bells and whistles\' that differentiate the application.'},
  {time: '03/2025', title: 'Beta Testing and Feedback'},
  {time: '04/2025', title: 'Product Launch', description: 'Deploy the application using AWS.'}
];

const SourTimeline = () => {
  return (
    <Timeline
        data={data}
        timeStyle={{
            textAlign: 'center',
            fontFamily: 'Mandali',
            fontSize: 20,
            fontWeight: '400',
            backgroundColor: '#FFFDD0',
            color: '#800020',
            padding: 5,
            borderRadius: 20,
            paddingLeft: 15,
            paddingRight: 15,
            margin: 5
        }}
        circleStyle={{
            width: 24,
            height: 24,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            marginTop: 17,
            marginLeft: -3
        }}
        titleStyle={{
            fontFamily: 'Mandali',
            fontSize: 20,
            fontWeight: '600',
            color: '#FFFDD0',
        }}
        descriptionStyle={{
            fontFamily: 'Mandali',
            fontSize: 15,
            fontWeight: '400',
            color: '#FFFDD0',
            maxWidth: 400
        }}
        separatorStyle={{
            marginTop: 48
        }}
        innerCircle={'icon'}
        lineColor="#FFFDD0"
        rowContainerStyle={{
            marginTop: 20
        }}
        renderFullLine={true}
    />

  );
};

export default SourTimeline;
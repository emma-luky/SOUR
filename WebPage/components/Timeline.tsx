import Timeline from 'react-native-timeline-flatlist';

const data = [
  {date: '09:00', title: 'Event 1', description: 'Event 1 Description'},
  {Date: '10:45', title: 'Event 2', description: 'Event 2 Description'},
  {Date: '12:00', title: 'Lunch', description: 'Lunch break'},
  {Date: '14:00', title: 'Event 3', description: 'Event 3 Description'},
  {Date: '16:30', title: 'Event 4', description: 'Event 4 Description'}
];

const SourTimeline = () => {
  return (
    <Timeline 
      data={data}
      timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
      // Add more customization options as needed
    />
  );
};

export default SourTimeline;
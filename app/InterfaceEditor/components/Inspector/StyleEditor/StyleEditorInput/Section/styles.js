import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#4b4b4b',
    flex: 1,
  },

  headerSection: {
    alignItems: 'center',
    backgroundColor: '#333',
    borderTopColor: 'hsla(0,0,100,0.1)',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 48,
  },
  arrow: {},
  collapsedSectionArrowImage: {
    width: 4,
    height: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  expandedSectionArrowImage: {
    width: 8,
    height: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {},
  titleLabel: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: '600',
  },

  childrenSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 30,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});
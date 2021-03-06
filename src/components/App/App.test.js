import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import { getArtist, getEvents } from '../../apiCalls/apiCalls';
import { setCurrentArtist, setEvents, filterEvents } from '../../actions/index'

jest.mock('../../apiCalls/apiCalls')

describe('App', () => {
  const mockArtist = {
    "image_url": "https://s3.amazonaws.com/bit-photos/large/8653543.jpeg",
    "name": "Thom Yorke",
    "id": "26092",
    "url": "https://www.bandsintown.com/a/26092?came_from=267&app_id=da8532625866baed0e4894e4738af8be"
  }
  const mockEvents = [{
      "offers": [{
        "type": "Tickets",
        "url": "https://www.bandsintown.com/t/1017555438?app_id=da8532625866baed0e4894e4738af8be&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        "status": "available"
      }],
      "venue": {
        "name": "EagleBank Arena",
        "country": "United States",
        "region": "VA",
        "city": "Fairfax",
        "latitude": "38.8330513",
        "longitude": "-77.3098503"
      },
      "datetime": "2020-03-28T20:00:00",
      "artist": {
        "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/8653543.jpeg",
        "mbid": "8ed2e0b3-aa4c-4e13-bec3-dc7393ed4d6b",
        "facebook_page_url": "",
        "image_url": "https://s3.amazonaws.com/bit-photos/large/8653543.jpeg",
        "name": "Thom Yorke",
        "options": {
          "display_listen_unit": false
        },
        "id": "26092",
        "tracker_count": 228033.0,
        "upcoming_event_count": 23.0,
        "url": "https://www.bandsintown.com/a/26092?came_from=267&app_id=da8532625866baed0e4894e4738af8be"
      },
      "on_sale_datetime": "2019-10-18T10:00:00",
      "description": "DELIVERY DELAY - All tickets are MOBILE and tickets will become available two days before the show (March 26, 2020). No print-at-home tickets or mail option available for this show. All tickets are mobile delivery on March 26, 2020. Floor is General Admission (standing room only). Must have a GA ticket to access the floor. All sections 101-130 are reserved seating. Doors open 6:30pm. Show starts 8pm.",
      "lineup": [
        "Thom Yorke"
      ],
      "id": "1017555438",
      "artist_id": "26092",
      "url": "https://www.bandsintown.com/e/1017555438?app_id=da8532625866baed0e4894e4738af8be&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event"
    },
    {
      "offers": [{
        "type": "Tickets",
        "url": "https://www.bandsintown.com/t/1017554367?app_id=da8532625866baed0e4894e4738af8be&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        "status": "available"
      }],
      "venue": {
        "name": "Radio City Music Hall",
        "country": "United States",
        "region": "NY",
        "city": "New York",
        "latitude": "40.759977",
        "longitude": "-73.979975"
      },
      "datetime": "2020-03-30T20:00:00",
      "on_sale_datetime": "2019-10-18T12:00:00",
      "description": "",
      "lineup": [
        "Thom Yorke"
      ],
      "id": "1017554367",
      "artist_id": "26092",
      "url": "https://www.bandsintown.com/e/1017554367?app_id=da8532625866baed0e4894e4738af8be&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event"
    }
  ]
  let app, instance;
  const setCurrentArtist = jest.fn();
  const setEvents = jest.fn();
  const filterEvents = jest.fn();
  const mockProps = {
    setCurrentArtist: setCurrentArtist,
    setEvents: setEvents,
    filterEvents: filterEvents
  }

  beforeEach(() => {
    app = shallow(
      <App {...mockProps} />
    )

    instance = app.instance()
  });

  it("should match snapshot", () => {
    expect(app).toMatchSnapshot();
  });

  describe("fetchArtistData", () => {
    beforeEach(() => {
      setCurrentArtist.mockImplementation(() => {
        return Promise.resolve({setCurrentArtist: mockArtist})
      });

      app = shallow(<App{...mockProps} />)

      instance = app.instance()
    });

    it("should run fetchArtistData after rendering if there is nodata", async () => {
      const spy = jest.spyOn(instance, 'fetchArtist')
        .mockImplementation(() => {
          return Promise.resolve(mockArtist)
        });
      instance.forceUpdate()

      await instance.componentDidMount()

      expect(spy).toHaveBeenCalled();
    });
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with a setCurrentArtist action when setCurrentArtist is called', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = setCurrentArtist(mockArtist)
      mappedProps.setCurrentArtist(mockArtist)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
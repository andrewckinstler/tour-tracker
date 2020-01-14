import * as actions from '../actions';

describe('Actions', () => {
  it('should have a type of SET_CURRENT_ARTIST', () => {
    const mockArtist = {
      "image_url": "https://s3.amazonaws.com/bit-photos/large/8653543.jpeg",
      "name": "Thom Yorke",
      "id": "26092",
      "url": "https://www.bandsintown.com/a/26092?came_from=267&app_id=da8532625866baed0e4894e4738af8be"
    }

    const mockAction = {
      artist: mockArtist,
      type: 'SET_CURRENT_ARTIST'
    }

    const result = actions.setCurrentArtist(mockArtist)

    expect(result).toEqual(mockAction)
  })

})
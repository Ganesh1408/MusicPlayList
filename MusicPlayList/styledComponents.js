import styled from 'styled-components'

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoSongText = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 500;
  color: #fff;
`
export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`
export const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
  background-size: cover;
`
export const ArtistName = styled.h1`
  font-family: 'Roboto';
  font-size: 44px;
  color: #ffffff;
  font-weight: bold;
`
export const ArtistInfo = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  color: #ffffff;
  font-weight: 400;
`
export const PlayListContainer = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MusicList = styled.ul`
  margin-left: 50px;
  margin-right: 50px;
  padding: 0px;
`
export const SearchInput = styled.input`
  height: 30px;
  width: 18%;
  padding-left: 15px;
  color: #cbd5e1;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const PlayListHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 400px;
  color: #ffffff;
`

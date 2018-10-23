import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import store from './services/store';
import AppConnectComponent from './App';

const bingImages = Immutable.Map({
  data: [
    {
      accentColor: '841E1D',
      contentSize: '332779 B',
      contentUrl: 'http://cdn.wonderfulengineering.com/wp-content/uploads/2014/05/airplane-wallpaper-4.jpg',
      datePublished: '2014-05-23T02:47:00.0000000Z',
      encodingFormat: 'jpeg',
      height: 2400,
      hostPageDisplayUrl: 'wonderfulengineering.com/50-airplane-wallpaper-backgrounds-in-hd...',
      hostPageUrl: 'http://wonderfulengineering.com/50-airplane-wallpaper-backgrounds-in-hd-for-free-download/',
      imageId: '38F0D397B1E3A12C3E11BF5A1938A99B331BD738',
      imageInsightsToken: 'ccid_yox7bINj*mid_38F0D397B1E3A12C3E11BF5A1938A99B331BD738*simid_608013766613207444*thid_OIP.yox7bINjSjQF1dkWlb8c7wHaF7',
      insightsMetadata: {},
      name: '50 Airplane Wallpaper Backgrounds in HD for Free Download',
      thumbnail: { width: 474, height: 379 },
      thumbnailUrl: 'https://tse1.mm.bing.net/th?id=OIP.yox7bINjSjQF1dkWlb8c7wHaF7&pid=Api',
      webSearchUrl: 'https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&q=airplane&id=38F0D397B1E3A12C3E11BF5A1938A99B331BD738&simid=608013766613207444',
      width: 3000
    }
  ]
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <AppConnectComponent bingImages={bingImages} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Post from './Post';

export default function Main(props) {
  const { title } = props;

  const posts = [
    {
      postTitle: 'Sample blog post',
      postBody: 'Lorem ipsum non magna et ipsum ullamco minim. Sunt ad fugiat minim enim nulla est minim non nulla anim laborum. Sint occaecat incididunt dolor aliquip aute fugiat aliquip sint ex esse. Cillum officia adipisicing labore mollit commodo elit ut tempor cupidatat eu sunt. Lorem duis est et exercitation aute qui est est ea culpa duis magna nostrud. Duis minim Lorem dolor sint. Nisi reprehenderit laboris deserunt do esse elit dolore exercitation proident ipsum labore do. Consectetur elit dolore occaecat et commodo eu non et eu. Sint est pariatur nostrud dolor nostrud adipisicing nisi nostrud.Minim elit laboris proident laborum. Aliqua non ea sunt in Lorem magna quis nostrud esse dolore cupidatat.'
    },
    {
      postTitle: 'Sample blog post 2',
      postBody: 'Lorem ipsum non magna et ipsum ullamco minim. Sunt ad fugiat minim enim nulla est minim non nulla anim laborum. Excepteur nulla ut cillum commodo incididunt ipsum. Enim voluptate adipisicing sit non occaecat enim officia voluptate laborum. Cillum incididunt duis eu nulla ad nulla enim proident nulla laborum eiusmod aliquip magna. Voluptate culpa reprehenderit labore labore veniam adipisicing. Tempor nostrud eiusmod magna qui incididunt anim. Amet laborum id ipsum esse do consequat fugiat veniam tempor sit amet.Minim elit laboris proident laborum. Aliqua non ea sunt in Lorem magna quis nostrud esse dolore cupidatat.'
    },
    {
      postTitle: 'Sample blog post 3',
      postBody: 'Lorem ipsum non magna et ipsum ullamco minim. Sunt ad fugiat minim enim nulla est minim non nulla anim laborum. Lorem ipsum non magna et ipsum ullamco minim. Sunt ad fugiat minim enim nulla est minim non nulla anim laborum. Lorem ipsum non magna et ipsum ullamco minim. Sunt ad fugiat minim enim nulla est minim non nulla anim laborum. Minim elit laboris proident laborum. Aliqua non ea sunt in Lorem magna quis nostrud esse dolore cupidatat.'
    },
  ]

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      
      <div>
        {posts.map((post) => {
          return (
            <Post title={post.postTitle} body={post.postBody} />
          );
        })}
      </div>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
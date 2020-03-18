<template>
    <div class="container mt-4  shadow">
    <a  :href="urltext">
        <StyledNewsBlock class="d-flex align-items-end block" :back="image">
        <Styledtextblock>
            <h1 class="text-left ml-3 text-white ">Author: {{author}}</h1>
            <br/>
            <p class="text-left text-white ml-3">Title: {{titletext}}</p>
        </Styledtextblock>
        </StyledNewsBlock>
    </a>
    </div>
</template>

<script>
    import style from 'vue-styled-components';

    let backprops = {
        back:String
    };

    let StyledNewsBlock = style('div',backprops)`
background:url(${props =>props.back});
background-size:cover;
height:20rem;
@media screen and (min-width: 900px) {
 height:40rem;
}
padding:0;
`;

    let Styledtextblock = style.div`
background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
width:100%;
height:12rem;
h1{
font-size:1rem;
}
p{
font-size:1rem;
}
@media screen and (min-width: 900px) {
h1{
font-size:2.5rem;
}
p{
font-size:1.8rem;
}
}
font-family: 'Raleway', sans-serif;
`;

export default {
  name: 'NewBlock',
  props: {
    image: String,
      author:String,
      titletext:String,
      urltext:String,
  },
    components:{
        "StyledNewsBlock":StyledNewsBlock,
        "Styledtextblock":Styledtextblock
    }
}
</script>


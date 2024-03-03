import React from 'react'
import itimg from "../components/Assert/img.png";

const Img = () => {
  return (
    <div class="max-w-[1320px] md:py-[80] py-5 m-[80px] mx-auto flex flex-col md:flex-row">
  <div class="basis-[45%] pb-5">
    <img src={itimg} alt="img" class="w-full" />
  </div>
  <div class="basis-[55%]">
    <h1 class='mx-5 text-4xl font-bold'>Web Solution: Pakistan's Most-Trusted IT Training Institute
</h1>
<p class="mx-5 my-3">Web Solutin is the leading IT training institute and software development company in Pakistan. We are on a mission to skill, reskill, and upskill individuals in the ever-evolving technology domains.

</p>

<p class="mx-5 my-3">Web Solution is the leading IT training institute and software development company in Pakistan. We are on a mission to skill, reskill, and upskill individuals in the ever-evolving technology domains.

</p>

<p class="mx-5 my-3">Web Solution Tech is the leading IT training institute and software development company in Pakistan. We are on a mission to skill, reskill, and upskill individuals in the ever-evolving technology domains.

</p>
  </div>
</div>

  )
}

export default Img;
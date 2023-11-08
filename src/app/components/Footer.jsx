import React from "react";


const Footer = () => {
  return (
    
<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Tasky App</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
    <li>
          <div class="mr-4 md:mr-6 ">Powered by</div>
        </li>
        <li>
            <a href="https://react.dev/" target="_blank" class="mr-4 hover:underline md:mr-6 ">React</a>
        </li>
        <li>
            <a href="https://supabase.com/" target="_blank" class="mr-4 hover:underline md:mr-6">Supabase</a>
        </li>
        <li>
            <a href="https://tailwindcss.com/" target="_blank" class="mr-4 hover:underline md:mr-6">Tailwind.css</a>
        </li>
        <li>
            <a href="https://vercel.com/" target="_blank" class="mr-4 hover:underline md:mr-6">Vercel</a>
        </li>
        <li>
            <a href="https://nextjs.org/" target="_blank" class="mr-4 hover:underline md:mr-6">Next.js</a>
        </li>
        <li>
            <a href="https://nodejs.org/" target="_blank" class="mr-4 hover:underline md:mr-6">Node.js</a>
        </li>
    </ul>
    </div>
</footer>

  );
};

export default Footer;

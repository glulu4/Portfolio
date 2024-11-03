import {JavaOriginal} from 'devicons-react';
import {FlaskOriginalWordmark} from 'devicons-react';
import {PythonOriginalWordmark} from 'devicons-react';
import {ReactOriginal} from 'devicons-react';
import {FlutterOriginal} from 'devicons-react';
import {HaskellOriginal} from 'devicons-react';
import {FirebaseOriginalWordmark} from 'devicons-react';
import {TailwindcssOriginal} from 'devicons-react';
// https://devicons-react.vercel.app/latest
const FLASK = <FlaskOriginalWordmark size='70' />
const JAVA = < JavaOriginal size='50' />;
const PYTHON = <PythonOriginalWordmark size='60' />;
const REACT = < ReactOriginal size='60' />;
const FLUTTER = <FlutterOriginal size="55" />;
const HASKELL = <HaskellOriginal size='60' />
const FIREBASE = <FirebaseOriginalWordmark size="82" />
const TailWind = <TailwindcssOriginal size="60" />

export const projectData = [
  {

    name: "Quantified",
    description: "Health tracking app",
    gif: "/gifs/quantified.gif",
    detail:
      <>
        Quantified – Leading the development of a
        React Native app with Firebase as the backend,
        designed to allow users to track, analyze, and
        visualize their health metrics. Collaborating with
        senior developers to implement secure user
        authentication, real-time data updates, and
        dynamic graphing features. Spearheading the
        integration of Firebase for efficient data
        storage and app scalability.

      </>,
    path: `quantified`,
    langaugesIcons: [REACT, FIREBASE],
    mobileDisplay: true,
  },

  {
    name: "Seo Crew",
    description: "Styled a company webiste",
    gif: "/gifs/seocrew.gif",

    detail:
      <>
        SEO Crew – I styled and developed a modern SEO services website using Tailwind CSS for
        responsive design, Vercel for seamless deployment, and Wisp for managing blogs.
        The project is focused on providing a fast, user-friendly experience to showcase
        SEO services and resources.    </>,
    path: `seocrew`,
    langaugesIcons: [REACT, TailWind],
    mobileDisplay: false,
  },
  {
    name: "Sam's Monday Bagels",
    description: "Professional Bagel Website, designed for weekly orders",
    gif: "/gifs/bagel.gif",

    detail:
      <>
        Shmuel's Monday Bagels is a professional website for a local bakery
        in Pittsburgh. I used React and Flask for the frontend and backend.
        Moreover, ThreeJs, the Stripe API, and
        Yagmail, were used for the 3D bagel, payment processing, email system, respectively.
        All the code can be found on my <a href='https://github.com/glulu4/Bagels' target='_target'>github</a>.
        The site, can be found <a href='https://shmuelsmondaybagels.com/' target='_target'>here</a>.
      </>,
    path: `bagel`,
    langaugesIcons: [FLASK, REACT],
    mobileDisplay: false,
  },

  {
    name: "Receipt Budget Tracker",
    description: "A mobile app that scans receipts and tracks expenses",
    gif: "/gifs/app.gif",

    detail:
      <>
        For this project, I used React Native (JavaScript) and Flask (Python) to
        implement a full-stack application to scan receipts to track expenses and
        taxable soda ounces for restaurants. In certain cities, there is a soda tax,
        so this app was intended to help small restaurants. I implemented the Azure
        Document Intelligence model for receipt scanning.
      </>,
    path: `budget`,
    langaugesIcons: [FLASK, REACT],
    mobileDisplay: true,
  },

  {
    name: "Virtual Memory Simulator",
    description: "A virtual memory simulation",
    detail:
      <>
        The gif to the right / bottom displays a simulation of vvirtual memory and paging,
        using both a single-level page table and a two-level tree. I used Java for this project. The code
        can be found on my <a href='https://github.com/glulu4/Virtual-Memory-Simulation' target='_target'>github</a>.
      </>,
    path: `vmsim`,
    langaugesIcons: [JAVA],
    mobileDisplay: false,
  },
  {
    name: "Neighborhood Analysis",
    description: "Python Program that determines the best Pittsburgh neighborhood",
    gif: "/gifs/neighborhood.gif",

    detail:
      <>
        This group project aimed to find the best neighborhood in Pittsburgh,
        based off of the crime rate, number of acres of park-land / trees, and income.
        My role included the data analysis of the 'natural environment conditions'.
        The code can be found on my <a href='https://github.com/glulu4/Pittsburgh_Neighborhood_Analysis' target='_target'>github</a>.
      </>,
    path: `neighborhood`,
    langaugesIcons: [PYTHON],
    mobileDisplay: false,

  },

  {
    name: "Sudoku Solver in Haskell",
    description: "Implemented DFS in Haskell to solve sudoku",
    gif: "/gifs/sudoku.gif",

    detail:
      <>
        In my functional programming class, one of our projects was to implement
        the DFS algorithm to solve sudoku.
      </>,
    path: `sudoku`,
    langaugesIcons: [HASKELL],
    mobileDisplay: false,
  },

  {
    name: "Bouncing DVD Logo",
    description: "Recreated the classic bouncing dvd logo",
    detail: <></>,
    path: `dvd`,
    langaugesIcons: [REACT],
    mobileDisplay: false,
  },
  {
    name: "Hoodies For Israel",
    description: "Simple website, designed to raise money for Israel by selling hoodies",
    gif: "/gifs/hoodie.gif",
    detail:
      <>
        Hoodies for Israel is a React web app that integrates the
        Stripe Checkout API. A hallmark of ths project is the dynamic resizing of the page
        and the rows. I used vanilla CSS flexbox to achieve this.
        The code can be found <a href='https://github.com/glulu4/Hoodie_Site' target='_target'>here</a>.
        The site, can be found <a href='https://hoodiesforisrael.com/' target='_target'>here</a>.
      </>,
    path: `hoodie`,
    langaugesIcons: [REACT],
    mobileDisplay: false,
  },
  {
    name: "Shakespeare Language Model",
    description: "Trained an n-gram model on a Shakespeare corpus",
    gif: "/gifs/ngram.gif",

    detail: <>
      N-gram langauge model that is trained on a Shakespeare corpus of text.
      No smoothing is used. A dynamic context size is used. All the code can be found <a href='https://github.com/glulu4/N-gram-Langauge-Model' target='_target'>here</a>.
    </>,
    path: `ngram`,
    langaugesIcons: [PYTHON],
    mobileDisplay: false,
  },
  {
    name: "Snap App",
    description: "Flutter productivity web app",
    gif: "/gifs/snap.gif",

    detail:
      <>
        Snap App, the productivity app, was a class project I worked on
        with two others, Hannah Harhai @hannahharhai & Maya Iwabuchi @mayajoyiwabuchi.
        We designed this web app under the MVVM design principle. All the code is on my <a href='https://github.com/glulu4/Snap_App' target='_target'>github</a>.
      </>,
    path: `snap-app`,
    langaugesIcons: [FLUTTER],
    mobileDisplay: false,
  },
  {
    name: "Complex Word Classifier",
    description: "Naive Bayes / Logistic Regression model that can predict complex words in a given text",
    gif: "/gifs/classifier.gif",

    path: `classifier`,
    detail:

      <>
        This project features a complex word
        classifier that classifies a word as complex based on two key
        metrics: word length and average occurrence, as sourced
        from Google's unigram count data. Rather than identifying
        words within a text, this program focuses on analyzing words
        from a given list and generates corresponding scores for each.
        Don't worry, the scores appear at the end.
        The code can be found on my <a href='https://github.com/glulu4/Complex-Word-Classifier/blob/main/README.md' target='_target'>github</a>.
      </>,
    langaugesIcons: [PYTHON],
    mobileDisplay: false,
  },


];
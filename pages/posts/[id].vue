<script lang="ts" setup>
const { path } = useRoute();

const { data: post } = await useAsyncData(path, () =>
  queryContent().where({ _path: path }).findOne()
);

const { data: settings } = await useSettings();
</script>

<template>
  <main v-if="post" class="px-6 pt-12 w-3xl mx-auto">
    <div class="mb-16">
      <p class="mb-2 text-2xl font-extrabold font-bold break-words">
        {{ post.title }}
      </p>

      <p class="opacity-60">
        Updated: {{ formatDate(post.updatedAt, settings?.timeZone) }}
      </p>
      <p class="opacity-60">
        Created: {{ formatDate(post.createdAt, settings?.timeZone) }}
      </p>
    </div>

    <ContentRenderer class="s-markdown" :value="post" />
  </main>
</template>

<style lang="postcss">
.s-markdown {
  @apply break-words;

  & strong {
    @apply font-semibold;
  }

  & p {
    @apply my-5 leading-relaxed;

    > a {
      @apply underline underline-offset-4 hover:text-blue-600;
    }
  }

  & img {
    @apply my-8 mx-auto;
  }

  & blockquote {
    @apply my-6 pl-4 font-medium border-l-4 border-gray-300;
  }

  & code {
    @apply p-1 bg-gray-200 text-sm font-medium rounded box-decoration-clone;
  }

  & pre {
    @apply my-6 p-4 bg-gray-200 text-sm font-normal leading-5 rounded overflow-x-auto;

    & code {
      @apply p-0 bg-inherit;

      font-weight: inherit;
      font-size: inherit;
      font-family: inherit;
      line-height: inherit;

      &::before {
        content: none;
      }

      &::after {
        content: none;
      }
    }
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    @apply my-3.5;
  }

  & h1 {
    @apply text-2xl font-extrabold;
  }

  & h2 {
    @apply text-xl font-bold;
  }

  & h3 {
    @apply text-lg font-semibold;
  }

  & h4 {
    @apply text-base font-semibold;
  }

  & h5 {
    @apply text-sm font-semibold;
  }

  & h6 {
    @apply text-xs font-semibold;
  }

  & hr {
    @apply my-10 border-t border-gray-200;
  }

  & hr + *,
  & h2 + *,
  & h3 + *,
  & h4 + *,
  & h5 + *,
  & h6 + * {
    @apply mt-0;
  }

  & ul {
    @apply list-disc my-5 pl-5;

    & li {
      @apply my-1.5;
    }

    > li {
      @apply pl-2;

      > *:first-child {
        @apply mt-5;
      }

      > *:last-child {
        @apply mb-5;
      }

      & p {
        @apply my-3;
      }
    }
  }

  & ol {
    @apply list-decimal my-5 pl-5;

    & li {
      @apply my-1.5;
    }

    > li {
      @apply pl-2;

      > *:first-child {
        @apply mt-5;
      }

      > *:last-child {
        @apply mb-5;
      }

      &::marker {
        @apply font-normal;
      }

      & p {
        @apply my-3;
      }
    }
  }

  & ul ul,
  & ul ol,
  & ol ul,
  & ol ol {
    @apply my-3;
  }

  & table {
    @apply table-auto text-sm leading-7 my-8;
  }

  & thead {
    @apply border-b border-gray-300;

    & th {
      @apply align-bottom px-3 pb-3 font-semibold;

      &:first-child {
        @apply pl-0;
      }

      &:last-child {
        @apply pr-0;
      }
    }
  }

  & tbody {
    & tr {
      @apply border-b border-gray-300;

      &:last-child {
        @apply border-b-0;
      }
    }

    & td {
      @apply align-baseline p-3;

      &:first-child {
        @apply pl-0;
      }

      &:last-child {
        @apply pr-0;
      }
    }
  }

  & sup {
    @apply mx-1;

    & a {
      @apply underline font-normal scroll-mt-24;
    }
  }

  & .footnotes {
    @apply mt-10 text-sm text-gray-500 border-t border-gray-200;

    & .sr-only {
      @apply hidden;
    }

    & .data-footnote-backref {
      @apply mx-1 font-mono;
    }
  }

  & .contains-task-list {
    @apply list-none pl-0;

    & .task-list-item {
      @apply pl-0;

      > *:first-child {
        @apply mt-0;
      }

      > *:last-child {
        @apply mb-0;
      }

      > input {
        @apply mr-2;
      }
    }
  }
}
</style>

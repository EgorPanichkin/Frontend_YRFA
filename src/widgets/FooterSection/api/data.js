import { PATHS } from "@/shared";

export const data = {
  list1: {
    title: "footer.list1.title",
  },
  list2: {
    title: "footer.list2.title",
    items: [{ text: "footer.list2.item1", path: PATHS.actual }],
  },
  list3: {
    title: "footer.list3.title",
    items: [
      { text: "footer.list3.item1", path: PATHS.directions },
      { text: "footer.list3.item2", path: PATHS.about },
      { text: "FAQ", path: PATHS.FAQ },
    ],
  },
  list4: {
    title: "footer.list4.title",
    items: [
      { text: "footer.list4.item1", path: PATHS.vacancy },
      { text: "footer.list4.item2", path: PATHS.doctors },
    ],
  },
  list5: {
    title: "footer.list5.title",
  },
  policy: "footer.policy",
  disclamer: "footer.disclamer",
};

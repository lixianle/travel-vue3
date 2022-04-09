import { request } from "./axios";

export function getSwiperList() {
  return request({
    method: "get",
    url: "/mock/swiper.json",
  });
}

export function getIconList() {
  return request({
    method: "get",
    url: "/mock/icon.json",
  });
}

export function getRecommendList() {
  return request({
    method: "get",
    url: "/mock/recommend.json",
  });
}

export function getWeekendList() {
  return request({
    method: "get",
    url: "/mock/weekend.json",
  });
}

export function getDetailData() {
  return request({
    method: "get",
    url: "/mock/detail.json",
  });
}

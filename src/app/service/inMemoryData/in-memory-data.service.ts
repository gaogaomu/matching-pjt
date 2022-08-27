import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const loginusers = [
      { email: 'test@email.com', password: '12345' },
      { email: 'test1@email.com', password: '12345' },
      { email: 'test2@email.com', password: '12345' },
      { email: 'test3@email.com', password: '12345' },
      { email: 'test4@email.com', password: '12345' },
      { email: 'test5@email.com', password: '12345' },
    ];
    const activeusers = [
      {
        id: 1,
        prefecture: '東京都',
        like: 30,
        thumbup: 10,
      },
      {
        id: 2,
        prefecture: '東京都',
        like: 30,
        thumbup: 10,
      },
      {
        id: 3,
        prefecture: '東京都',
        like: 30,
        thumbup: 10,
      },
      {
        id: 4,
        prefecture: '東京都',
        like: 30,
        thumbup: 10,
      },
    ];
    const users = [
      {
        id: 1,
        name: 'わわわわー',
        age: '26歳',
        prefecture: '東京都',
        industry: 'IT業界',
        occupation: '会社役員',
        height: '188センチ',
        physique: 'ややデブ',
        character: '温厚で穏やか',
        holiday: '不定期',
        alcohol: 'めっちゃ飲む',
        cigarettes: 'めっちゃ吸う',
        like: 1,
        thumbup: 2,
      },
      {
        id: 2,
        name: 'いす座るの趣味',
        age: '44歳',
        prefecture: '北海道',
        industry: '運送業界',
        occupation: '平社員',
        height: '156センチ',
        physique: 'めっちゃがりがり',
        character: '気象激しめ',
        holiday: '毎日',
        alcohol: '下戸',
        cigarettes: '吸わない',
        like: 1,
        thumbup: 2,
      },
      {
        id: 3,
        name: 'わわわわー',
        age: '26歳',
        prefecture: '東京都',
        industry: 'IT業界',
        occupation: '会社役員',
        height: '188センチ',
        physique: 'ややデブ',
        character: '温厚で穏やか',
        holiday: '不定期',
        alcohol: 'めっちゃ飲む',
        cigarettes: 'めっちゃ吸う',
        like: 1,
        thumbup: 2,
      },
      {
        id: 4,
        name: 'わわわわー',
        age: '26歳',
        prefecture: '東京都',
        industry: 'IT業界',
        occupation: '会社役員',
        height: '188センチ',
        physique: 'ややデブ',
        character: '温厚で穏やか',
        holiday: '不定期',
        alcohol: 'めっちゃ飲む',
        cigarettes: 'めっちゃ吸う',
        like: 1,
        thumbup: 2,
      },
    ];
    return { loginusers, activeusers, users };
  }
}

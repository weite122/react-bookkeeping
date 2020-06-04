import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';


const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string; iconName: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {
          'id': createId(),
          'name': '购物',
          'iconName': 'shopping'
        },
        {
          'id': createId(),
          'name': '娱乐',
          'iconName': 'happy'
        },
        {
          'id': createId(),
          'name': '餐饮',
          'iconName': 'eat'
        },
        {
          'id': createId(),
          'name': '通信',
          'iconName': 'phone'
        },
        {
          'id': createId(),
          'name': '宠物',
          'iconName': 'pet'
        },
        {
          'id': createId(),
          'name': '交通',
          'iconName': 'transportation'
        },
        {
          'id': createId(),
          'name': '学习',
          'iconName': 'study'
        },
        {
          'id': createId(),
          'name': '旅行',
          'iconName': 'travel'
        },
        {
          'id': createId(),
          'name': '投资',
          'iconName': 'financing'
        },
        {
          'id': createId(),
          'name': '其他收入',
          'iconName': 'othercome'
        },
        {
          'id': createId(),
          'name': '兼职',
          'iconName': 'parttimejob'
        },
        {
          'id': createId(),
          'name': '工资',
          'iconName': 'salary'
        },
        {
          'id': createId(),
          'name': '转账',
          'iconName': 'transfer'
        }
      ];
    }
    setTags(localTags);

  }, []); // 组件挂载时执行

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, {name}: { name: string }, {iconName}: { iconName: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name: name, iconName: iconName} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createId(), name: tagName, iconName: 'othercome'}]);
    }
  };
  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.name : '';
  };
  const getIconName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.iconName : '';
  };
  return {tags, getName, getIconName, addTag, setTags, findTag, updateTag, findTagIndex, deleteTag};
};

export {useTags};
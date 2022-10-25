## typeorm

### ManyToMany

需要设置 `cascade: true,` // 允许在数据库中插入或者更新相关对象


## typeorm IN 查询
```js
// 多次查询
const users = await Promise.all(userIds.map(id => {
  return this.userRepository.findOne({
    where: {
      id
    }
  })
}))

// 一次查询
const users = await this.userRepository.createQueryBuilder('user')
  .where('user.id IN (:...ids)', { ids: userIds })
  .getMany()

// 性能那个好？
```

## 在查询的时候exclue column

[参考地址](https://stackoverflow.com/questions/43726739/is-it-possible-to-protect-a-property-and-exclude-it-from-select-statements)

```js
// user.entity.ts
@Column({ select: false })
password: string;

// user.service.ts
const user = await this.userRepository.createQueryBuilder('user')
    .select()
    .addSelect('user.password')
    .getMany()
```

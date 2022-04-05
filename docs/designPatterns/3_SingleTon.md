# 单例模式
保证一个类仅有一个实例，并提供一个访问它的全局访问点

### 意图
保证一个类仅有一个实例，并提供一个访问它的全局访问点
### 解决问题
一个全局使用的类频繁地创建与销毁
### 何时使用
当您想控制实例数目，节省系统资源的时候
### 解决方法
判断系统是否已经有这个单例，如果有则返回，如果没有则创建
### 优点
1. 调用者只需知道名字就能创建对象
2. 拓展性高，只需拓展一个工厂类
3. 屏蔽具体实现


### 缺点
1. 没有接口，不能继承
2. 与单一原则冲突，一个类应该只关心内部逻辑， 而不关系外部怎么实例化
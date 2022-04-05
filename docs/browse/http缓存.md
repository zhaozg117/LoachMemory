# http缓存
通过复用以前获取的资源，可以显著提高网站和应用程序的性能。Web 缓存减少了等待时间和网络流量，因此减少了显示资源表示形式所需的时间。通过使用 HTTP缓存，变得更加响应性。

# 缓存控制

常见的 HTTP 缓存只能存储 GET 响应，对于其他类型的响应则无能为力。缓存的关键主要包括request method和目标URI（一般只有GET请求才会被缓存）

## cache-control 头
HTTP/1.1定义的 Cache-Control 头用来区分对缓存机制的支持情况， 请求头和响应头都支持这个属性。通过它提供的不同的值来定义缓存策略。
### Cache-Control: no-store
没有缓存，每次客户端发起请求都会下载完整的响应内容

### Cache-Control: no-store
缓存但重新验证，服务端验证缓存是否过期，若未过期，返回304，使用本地缓存副本

### 私有缓存和公共缓存
Cache-Control:public 能被任何中间人（比如中间代理、CDN等）缓存
Cache-Control:private 专用于某单个用户的，中间人不能缓存此响应，该响应只能应用于浏览器私有缓存中。

### 过期
Cache-Control: max-age=31536000 表示资源能够被缓存（保持新鲜）的最大时间。相对Expires而言，max-age是距离请求发起的时间的秒数。

### 验证方式
Cache-Control: must-revalidate 着缓存在考虑使用一个陈旧的资源时，必须先验证它的状态，已过期的缓存将不被使用


## Pragma 头
Pragma 是HTTP/1.0标准中定义的一个header属性，请求中包含Pragma的效果跟在头信息中定义Cache-Control: no-cache相同，通常定义Pragma以向后兼容基于HTTP/1.0的客户端

## Expires(响应头)+Date
Expires是HTTP/1.0控制网页缓存的响应头字段，其值为服务器返回该请求结果缓存的到期时间，如果客户端的时间小于Expires的值时，直接使用缓存结果。

### 新鲜度

有特定头信息的请求，会去计算缓存寿命。比如Cache-control: max-age=N的头，相应的缓存的寿命就是N。通常情况下，对于不含这个属性的请求则会去查看是否包含Expires属性，通过比较Expires的值和头里面Date属性的值来判断是否缓存还有效。如果max-age和expires属性都没有，找找头里的Last-Modified信息。如果有，缓存的寿命就等于头里面Date的值减去Last-Modified的值除以10

缓存失效时间计算公式如下：
expirationTime = responseTime + freshnessLifetime - currentAge

验证缓存。


## 协商缓存控制
协商缓存的标识也是在响应报文的HTTP头中和请求结果一起返回给浏览器的，控制协商缓存的字段分别有：Last-Modified / If-Modified-Since和Etag / If-None-Match，其中Etag / If-None-Match的优先级比Last-Modified / If-Modified-Since高。

## Etags && If-None-Match
ETag 是一个响应首部字段，强校验器，它是根据实体内容生成的一段 hash 字符串，标识资源的状态，由服务端产生，
如果资源请求的响应头里含有ETag, 客户端可以在后续的请求的头中带上 If-None-Match 头来验证缓存。 ETag 属性值与这个首部中列出的时候，服务器才会返回带有所请求资源实体的 200 响应，否则服务器会返回不带实体的 304 响应

## Last-Modified(响应头)与 If-Modified-Since(请求头)
当带着 If-Modified-Since 头访问服务器请求资源时，服务器会检查 Last-Modified，如果 Last-Modified 的时间早于或等于 If-Modified-Since 则会返回一个不带主体的 304 响应，否则将重新返回资源。Last-Modified只能精确到一秒，可以作为一种弱校验器

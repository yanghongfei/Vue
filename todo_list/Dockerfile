
FROM centos:7
# 设置编码
ENV LANG en_US.UTF-8
# 同步时间
ENV TZ=Asia/Shanghai

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 1. 安装基本依赖
RUN yum install epel-release -y && yum install wget unzip nginx vim net-tools zlib-devel openssl-devel supervisor -y

# 2. 安装php环境
# 3. 安装yum依赖
# 4. 复制代码
RUN mkdir -p /var/www/html
ADD . /var/www/html/
COPY docs/todo_list.conf /etc/nginx/conf.d/
COPY docs/supervisord.conf  /etc/supervisord.conf
# 6. 日志
# VOLUME /var/log/

# 7. 准备文件
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

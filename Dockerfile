FROM 			docker.io/centos
MAINTAINER 		demo "demo@example.com"
USER 			root
EXPOSE 			3000
COPY 			app.js package.json /
RUN			yum update -y \
			&& yum install nodejs npm -y \
			&& yum clean all \
			&& npm install
CMD			["bash", "-c", "node app.js"]

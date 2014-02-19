# Collaborative video marking

Web interface to a list of videos, where everyone can help find the interesting
bits to your collection.

Add VIDEOS.txt of your MP4 files

E.g.

	curl -s "http://$YOUR_BUCKET.s3.amazonaws.com/" |
	xmlstarlet sel -N w="http://s3.amazonaws.com/doc/2006-03-01/" -T -t -m "//w:Key" -o "$url" -v . -n | grep mp4$ > VIDEOS.txt

#makefile for hello.asm
hello: hello.o
	gcc -o ./out/hello ./out/hello.o -no-pie
hello.o: hello.asm
	nasm -f elf64 -g -F dwarf hello.asm -l ./out/hello.lst -o ./out/hello.o
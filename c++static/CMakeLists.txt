cmake_minimum_required(VERSION 3.22)

SET(LIBNAME base)

SET(ENV)
IF(MSVC)
	IF(CMAKE_SIZEOF_VOID_P EQUAL 4)		# if(32bit)
		STRING(APPEND ENV "windows_x86_32")
		IF(MSVC_VERSION EQUAL 1900)		# if(vs2015)
			STRING(APPEND ENV "_msvc14")
		ENDIF()
	elseif(CMAKE_SIZEOF_VOID_P EQUAL 8)	# if(64bit)
		STRING(APPEND ENV "windows_x86_64")
		IF(MSVC_VERSION EQUAL 1900)		# if(vs2015)
			STRING(APPEND ENV "_msvc14")
		ENDIF()
	ENDIF()
ENDIF()

message("ENV " ${ENV})

SET(src
	include/CBuffer.h	src/CBuffer.cpp
	include/CBufferRecv.h	src/CBufferRecv.cpp
	include/CBufferSend.h	src/CBufferSend.cpp
	include/CErrRecord.h
	include/CFile.h		src/CFile.cpp
	include/CTime.h		src/CTime.cpp
	include/Func.h		src/Func.cpp
	include/macro.h
	include/utility.hpp)

SET(CMAKE_INSTALL_PREFIX ${CMAKE_CURRENT_SOURCE_DIR}/lib)

ADD_DEFINITIONS(-D_CRT_SECURE_NO_WARNINGS)

INCLUDE_DIRECTORIES(${CMAKE_CURRENT_SOURCE_DIR}/include)

ADD_LIBRARY(${LIBNAME} STATIC ${src})

#SET_TARGET_PROPERTIES(${LIBNAME} PROPERTIES DEBUG_POSTFIX "_d")

INSTALL(TARGETS ${LIBNAME} CONFIGURATIONS Release  DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/lib/${ENV}/Release)
INSTALL(TARGETS ${LIBNAME} CONFIGURATIONS Debug  DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/lib/${ENV}/Debug)

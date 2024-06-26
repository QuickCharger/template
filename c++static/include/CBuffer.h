#pragma once

#include "CErrRecord.h"

/*
* no overflow judge
*/
class CBuffer : public CErrRecord
{
public:
	CBuffer();
	CBuffer(unsigned int a_nBufferSize);
	virtual ~CBuffer();
	void ReAllocate(int a_nBufferSize);

	unsigned int Available();
	bool Append(const char* a_pData, int a_size);
	void DropFront(unsigned int a_nSize);
	void DropBack(unsigned int a_nSize);
	void Clear();

	unsigned int  GetCurrentSize();
	char* GetBuffer();
	void GetBuffer(char*&p);
	void GetBuffer(char *&p, unsigned int& n);
	void Test();

protected:
	const static unsigned int m_skIntSize = sizeof(int);

private:
	void init();
	void arrange();

private:
	char *m_pBuffer = nullptr;
	unsigned int m_nBufferSize = 10240;
	unsigned int m_nCurrentSize = 0;
	unsigned int m_nCurrentPoint = 0;
};
